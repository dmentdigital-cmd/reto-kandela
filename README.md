# Kandela por SmartDogs

Aplicación web progresiva, instalable en celular y basada en `e_book_kandela.md`.

## Vista previa

https://dmentdigital-cmd.github.io/reto-kandela/

## Probar localmente

La PWA necesita un servidor local para activar el modo sin conexión:

```powershell
cd "APLICACION SMARTDOGS"
npm start
```

Abrir `http://127.0.0.1:4173`. No requiere instalar dependencias.

## Proyecto APK con Shorebird

La carpeta `mobile/` contiene el proyecto Flutter Android. Su shell carga la aplicación Kandela publicada y está preparada para Shorebird Code Push.

Requisitos para generar la APK:

- Java 17 (JDK)
- Android SDK y Android SDK Platform Tools
- Una cuenta de Shorebird autenticada

Desde `mobile/`, después de instalar el entorno Android:

```powershell
shorebird init
shorebird release android --artifact apk --target-platform android-arm64
```

Los cambios posteriores al código Dart se publican con `shorebird patch android`.

## Funciones

- Ruta de ocho retos basada en el ebook.
- Ejercicios accionables con progreso guardado en el dispositivo.
- Sesión guiada con temporizador.
- Diario local de avances.
- Perfil del perro.
- Instalación en pantalla de inicio y soporte sin conexión.

Los datos se guardan únicamente en `localStorage` del navegador. Esta versión no incluye cuentas, sincronización ni servidor.
