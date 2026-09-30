import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

const appUrl = 'https://dmentdigital-cmd.github.io/reto-kandela/';

void main() => runApp(const KandelaApp());

class KandelaApp extends StatelessWidget {
  const KandelaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Kandela | SmartDogs',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF7B0079)),
        scaffoldBackgroundColor: const Color(0xFFFFF9F0),
        useMaterial3: true,
      ),
      home: const KandelaShell(),
    );
  }
}

class KandelaShell extends StatefulWidget {
  const KandelaShell({super.key});

  @override
  State<KandelaShell> createState() => _KandelaShellState();
}

class _KandelaShellState extends State<KandelaShell> {
  late final WebViewController _controller;
  bool _loading = true;
  bool _failed = false;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(NavigationDelegate(
        onPageStarted: (_) => setState(() { _loading = true; _failed = false; }),
        onPageFinished: (_) => setState(() => _loading = false),
        onWebResourceError: (_) => setState(() { _loading = false; _failed = true; }),
      ))
      ..loadRequest(Uri.parse(appUrl));
  }

  Future<void> _retry() async {
    setState(() { _loading = true; _failed = false; });
    await _controller.reload();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: [
            WebViewWidget(controller: _controller),
            if (_loading) const ColoredBox(
              color: Color(0xFFFFF9F0),
              child: Center(child: CircularProgressIndicator(color: Color(0xFFE12F7C))),
            ),
            if (_failed) Center(
              child: Card(
                margin: const EdgeInsets.all(24),
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    const Text('No se pudo cargar Kandela', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                    const SizedBox(height: 8),
                    const Text('Comprueba tu conexión e inténtalo de nuevo.'),
                    const SizedBox(height: 16),
                    FilledButton(onPressed: _retry, child: const Text('Reintentar')),
                  ]),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
