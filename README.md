# Sensoren - Caro und Vani

# Dokumentation für das BME680 Sensor-Datenerfassungsprogramm
Einführung

Dies ist eine Dokumentation für ein Arduino-Programm, das entwickelt wurde, um Daten von einem BME680-Sensor zu sammeln und sie an einen Server zu senden. Der BME680 ist ein Umweltsensor, der Luftqualitätsdaten wie Temperatur und Luftfeuchtigkeit misst. Das Programm verwendet eine ESP32-kompatible Mikrocontroller-Plattform, um die Daten über Wi-Fi an einen Server zu übertragen.
Hardware-Anforderungen

    Ein Mikrocontroller-Board, das mit dem Arduino-Framework kompatibel ist, wie der ESP32.
    Ein BME680-Sensor, der über I2C-Schnittstelle angeschlossen ist.
    Eine aktive Wi-Fi-Verbindung, um Daten an einen Server zu senden.

Software-Anforderungen

    Die Arduino-Entwicklungsumgebung mit den erforderlichen Bibliotheken installiert.

Bibliotheken

Das Programm verwendet die folgenden Arduino-Bibliotheken:

    WiFi.h: Für die Wi-Fi-Verbindung.
    HTTPClient.h: Für die HTTP-Kommunikation mit dem Server.
    Wire.h: Für die I2C-Kommunikation.
    Adafruit_Sensor.h und Adafruit_BME680.h: Für die Kommunikation und Datenerfassung vom BME680-Sensor.

Funktionsweise

Das Programm stellt eine Verbindung zum Wi-Fi-Netzwerk her und initialisiert den BME680-Sensor. Es liest periodisch die Luftfeuchtigkeit und Temperatur von dem Sensor aus und sendet diese Daten an einen Server über HTTP-GET-Anfragen. Die Übertragung erfolgt an eine spezifische URL, die die aktuellen Werte der Luftfeuchtigkeit und Temperatur enthält.
Konfiguration

Vor der Verwendung des Programms müssen Sie die folgenden Informationen konfigurieren:

    ssid: Der Name Ihres WLAN-Netzwerks.
    password: Das WLAN-Passwort.
    serverAddress: Die Basis-URL des Servers, an den die Daten gesendet werden.

Verbindung zum Server

Die Daten werden an den Server gesendet, indem eine HTTP-GET-Anfrage mit den aktuellen Werten der Luftfeuchtigkeit und Temperatur erstellt wird. Der Server sollte in der Lage sein, diese Anfragen zu empfangen und die Daten zu verarbeiten.
Verwendung

    Stellen Sie sicher, dass Sie die erforderlichen Bibliotheken in der Arduino-Entwicklungsumgebung installiert haben.
    Konfigurieren Sie die WLAN-Verbindung, indem Sie ssid und password entsprechend Ihren Netzwerkeinstellungen festlegen.
    Stellen Sie sicher, dass der BME680-Sensor ordnungsgemäß angeschlossen ist.
    Laden Sie das Programm auf Ihr Mikrocontroller-Board hoch.
    Überwachen Sie die serielle Ausgabe, um den Programmablauf und die übertragenen Daten anzuzeigen.

Fehlerbehandlung

    Wenn der BME680-Sensor nicht gefunden wird, wird das Programm in einer Endlosschleife verharren und eine Fehlermeldung ausgeben.
    Bei Problemen mit der Wi-Fi-Verbindung werden Fehlermeldungen auf der seriellen Konsole angezeigt.
    Wenn die HTTP-Anfrage an den Server fehlschlägt, wird der entsprechende Fehlercode auf der seriellen Konsole ausgegeben.

Anpassung

Sie können das Programm nach Ihren Anforderungen anpassen, indem Sie die Übertragungsrate, die Datenformatierung und die Server-URL ändern.

Das ist eine grundlegende Dokumentation für das BME680 Sensor-Datenerfassungsprogramm. Sie können weitere Informationen hinzufügen, je nach Ihren spezifischen Anforderungen und Verwendungszwecken.
