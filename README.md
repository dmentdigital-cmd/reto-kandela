# Kandela por SmartDogs

Aplicación web progresiva, instalable en celular y basada en `e_book_kandela.md`.

## Probar localmente

La PWA necesita un servidor local para activar el modo sin conexión:

```powershell
cd "APLICACION SMARTDOGS"
npm start
```

Abrir `http://127.0.0.1:4173`. No requiere instalar dependencias.

## Funciones

- Ruta de ocho retos basada en el ebook.
- Ejercicios accionables con progreso guardado en el dispositivo.
- Sesión guiada con temporizador.
- Diario local de avances.
- Perfil del perro.
- Instalación en pantalla de inicio y soporte sin conexión.

Los datos se guardan únicamente en `localStorage` del navegador. Esta versión no incluye cuentas, sincronización ni servidor.
