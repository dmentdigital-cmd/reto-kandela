import 'package:flutter_test/flutter_test.dart';

import 'package:kandela_app/main.dart';

void main() {
  testWidgets('Kandela monta su shell móvil', (WidgetTester tester) async {
    await tester.pumpWidget(const KandelaApp());
    expect(find.byType(KandelaShell), findsOneWidget);
  });
}
