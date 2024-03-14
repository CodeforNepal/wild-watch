#include <WiFi.h>
#include <WebServer.h>
#include <Wire.h>
#include <ArduinoJson.h>
#include <LiquidCrystal_I2C.h>

const char *ssid = "Sunway_304";
const char *password = "sunway@123";

WebServer server(80);

const int buzzerPin = 13;
const unsigned long buzzerDuration = 5000;
const unsigned long displayResetDuration = 7000;
unsigned long lastBuzzerTime = 0;
unsigned long lastDisplayUpdateTime = 0;

LiquidCrystal_I2C lcd(0x27, 16, 2);

void handleAnimalDetection()
{
    if (server.method() == HTTP_POST)
    {
        String receivedData = server.arg("plain");
        Serial.print("Received data: ");
        Serial.println(receivedData);

        StaticJsonDocument<200> doc;
        DeserializationError error = deserializeJson(doc, receivedData);

        if (error)
        {
            Serial.print("JSON parsing error: ");
            Serial.println(error.c_str());
            return;
        }

        JsonArray animalNames = doc["animal_names"];

        if (animalNames.size() == 0)
        {
            digitalWrite(buzzerPin, LOW);
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print("No Animal Detected");
        }
        else if (animalNames.size() == 1)
        {
            digitalWrite(buzzerPin, HIGH);
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print(animalNames[0].as<String>() + " Detected");
            lastBuzzerTime = millis();
        }
        else
        {
            digitalWrite(buzzerPin, HIGH);
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print("Multiple Animals Detected");
            lastBuzzerTime = millis();
        }

        lastDisplayUpdateTime = millis();

        server.sendHeader("Access-Control-Allow-Origin", "*");
        server.sendHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        server.sendHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        server.send(200, "text/plain", "Data received successfully");
    }
    else
    {
        server.send(405, "text/plain", "Method Not Allowed");
    }
}

void handleOptions()
{
    server.sendHeader("Access-Control-Allow-Origin", "*");
    server.sendHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    server.sendHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    server.send(200);
}

void setup()
{
    Serial.begin(115200);
    pinMode(buzzerPin, OUTPUT);
    lcd.init();
    lcd.backlight();

    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi");
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());

    server.on("/api/animal-detected", HTTP_POST, handleAnimalDetection);
    server.on("/api/animal-detected", HTTP_OPTIONS, handleOptions);

    server.begin();
    Serial.println("HTTP server started");
}

void loop()
{
    server.handleClient();

    if (millis() - lastBuzzerTime >= buzzerDuration)
    {
        digitalWrite(buzzerPin, LOW);
    }

    if (millis() - lastDisplayUpdateTime >= displayResetDuration)
    {
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Alert System");
        lastDisplayUpdateTime = millis();
    }
}
