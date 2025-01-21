import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import DishTable from "./DishTable";
import Footer from "../common/Footer";
import { useAuth } from "../../Context/AuthContext";
import { addDish } from "../../Api/apiStore";

const QRScanner = () => {
  const qrCodeScannerRef = useRef(null);
  const [scannedMessage, setScannedMessage] = useState(null);
  const {userData} = useAuth()

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false 
    );

    qrScanner.render(
      async(decodedText, decodedResult) => {
        try {
          // Parse the scanned data as JSON
          const parsedData = JSON.parse(decodedText);
          const newData = {dishName: parsedData.dishName, ingredients: parsedData.items}
          setScannedMessage(newData);

          if(userData){
            await addDish(newData)
          }
        } catch (error) {
          console.error("Invalid QR Code data:", error);
        }
      },
      (error) => {
        console.warn("Error scanning QR Code:", error);
      }
    );

    return () => {
      qrScanner.clear();
    };
  }, []);
  const updateQuantity = (id, delta) => {
    if (scannedMessage) {
      const updatedIngredients = scannedMessage.ingredients.map((ingredient) =>
        ingredient._id === id
          ? { ...ingredient, quantity: Math.max(0, ingredient.quantity + delta) }
          : ingredient
      );
      setScannedMessage({ ...scannedMessage, ingredients: updatedIngredients });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            QR Code Scanner
          </h2>

          {/* Div where the QR scanner will render */}
          <div
            id="qr-reader"
            className="mx-auto mb-4"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          ></div>

          {/* Display the scanned DishTable if the data is valid */}
          {scannedMessage ? (
            <div className="mt-6">
              <DishTable data={scannedMessage} updateQuantity={updateQuantity} />
            </div>
          ) : (
            <div className="text-center text-gray-500">Scan a QR Code to see the data</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QRScanner;
