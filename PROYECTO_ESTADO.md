# Estado del proyecto SmartDogs / Kandela

**Actualizado:** 2026-09-30 08:00 America/Bogota  
**Directorio fuente:** `C:\Users\diego\Documents\DIEGOSAN\PROYECTO SMARTDOGS\APLICACION SMARTDOGS`  
**Estado:** APK Android compilado y publicado en Shorebird; archivo APK compartido en Google Drive.

## Trabajo completado

- Se creó la aplicación web/PWA de entrenamiento canino Kandela a partir de `e_book_kandela.md`.
- Se incluyeron lecciones, progreso, temporizador, diario, perfil, manifest y funcionamiento offline.
- Se creó el shell Flutter Android en `mobile/` usando WebView para cargar la aplicación publicada.
- Se configuró Shorebird y se publicó la release Android `1.0.0+1`.
- Se generó el APK arm64 de aproximadamente 17 MB.
- El repositorio está publicado en [GitHub](https://github.com/dmentdigital-cmd/reto-kandela).
- El APK también está incluido en GitHub: [Descargar app-release.apk](https://github.com/dmentdigital-cmd/reto-kandela/raw/refs/heads/main/app-release.apk).
- La aplicación web está publicada en [GitHub Pages](https://dmentdigital-cmd.github.io/reto-kandela/).

## APK verificado en Google Drive

- **Archivo:** `app-release.apk`
- **Enlace:** [Descargar app-release.apk](https://drive.google.com/file/d/11bMyfdXMHvTPbDY1X5GkzI-BRzycTouz/view?usp=sharing)
- **ID:** `11bMyfdXMHvTPbDY1X5GkzI-BRzycTouz`
- **Tipo:** `application/vnd.android.package-archive`
- **Tamaño verificado:** 17,872,514 bytes
- **Estado:** no está en la papelera.
- **Acceso verificado:** cualquier persona con el enlace tiene permiso de lector.
- **Última modificación verificada:** 2026-09-30 08:38:51 America/Bogota aproximadamente.

## Decisiones técnicas

- El APK carga la aplicación web de GitHub Pages mediante WebView.
- El APK requiere conexión a Internet para cargar el contenido remoto.
- El archivo `.aab` queda reservado para una futura publicación en Google Play.
- El archivo local `mobile/android/local.properties` contiene rutas de máquina y no se publica en Git.

## Bloqueadores y riesgos

- No se ha verificado la instalación en un teléfono físico desde este entorno.
- La aplicación depende de que la URL de GitHub Pages continúe disponible.
- La compilación se hizo para `android-arm64`; algunos teléfonos Android antiguos pueden requerir otra arquitectura.
- Shorebird mostró advertencias de dependencias desactualizadas y de símbolos de depuración, sin impedir la generación del APK.

## Próxima acción

1. Descargar el APK desde Drive en un teléfono Android.
2. Permitir la instalación desde fuentes desconocidas si el sistema lo solicita.
3. Instalar y probar la navegación, las lecciones y el acceso sin conexión.
4. Recoger comentarios de Juan Carlos antes de preparar una nueva versión.

## Synapse

- **Proyecto:** SmartDogs / Kandela
- **Repositorio:** https://github.com/dmentdigital-cmd/reto-kandela
- **Estado local:** este archivo es la fuente de verdad local.
- **Drive APK:** https://drive.google.com/file/d/11bMyfdXMHvTPbDY1X5GkzI-BRzycTouz/view?usp=sharing
- **Carpeta de estados:** https://drive.google.com/drive/folders/156DKmGKqakCACN-2Or6kGIdo1ZJ2685K?usp=sharing
