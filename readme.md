# Mentoree


#### Vorrausetzungen:
- PHP 7.1
- WebServer (z.B. Apache, Nginx)
- Composer (https://getcomposer.org/download/)
- Angular CLI (v7)

#### Installation

1: Klonen der Projekts in den Ordner (im folgenden $ROOT genannt)

2: Zunächst werden die abhängigkeiten installiert

`cd $ROOT && composer install`

`cd $ROOT/angular && npm install`

3: PHP Umgebung initialisieren

`php $root/artisan key:generate` APP-Key generieren (wird für Verschlüsselung benutzt)

`php $root/artisan storage:link` Linkt teile des Storage ordner in den public Ordner

`php $root/artisan migrate` Migrieren der Datenbank (Aufbauen des DB Schemas)

`chmod -R 777 $root/storage` Storage Ordner Berechtigung 

`chmod -R 777 $root/bootstrap/cache` Storage Ordner Berechtigung 

`cp $root/.env.example $root/.env` Environmentdatei kopieren 

`APP_URL` und Datenbankverbindung in der Datei `$root/.env` konfigurieren (z.B. http://localhost oder http://pwp.dev) 

4: Angular build

`cd $root/angular && npm run build`

5: Document Root des Webservers auf den $root/public Order setzen

PseudoCode: `DocumentRoot = "$root/public"`


#### Fehlerbehandlung bei Installation

Falls es Probleme bei der Installation geben sollte gibt es ein 
Log-File unter dem Pfad `$root/storage/logs/laravel.log` ansonsten gibt es noch die WebServer logs (z.B.
Apache/Nginx)