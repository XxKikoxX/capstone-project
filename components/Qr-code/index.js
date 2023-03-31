/* import QRCode from "qrcode";
import Image from "next/image";

const generateQRCode = async (text) => {
  try {
    const dataUrl = await QRCode.toDataURL(text);
    return dataUrl;
  } catch (error) {
    console.error(error);
  }
};

export default function QRCodeGenerator() {
  const [qrCodeUrl, setQRCodeUrl] = useState(null);

  useEffect(() => {
    generateQRCode("https://example.com").then((dataUrl) => {
      setQRCodeUrl(dataUrl);
    });
  }, []);

  return (
    <div>
      {qrCodeUrl ? (
        <Image src={qrCodeUrl} alt="QR Code" />
      ) : (
        <p>Loading QR Code...</p>
      )}
    </div>
  );
} */
