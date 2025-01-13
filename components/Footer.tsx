export function Footer() {
    return (
      <footer id="footer" className="bg-black text-white py-12 border-t-2 border-blue-600 " style={{ height: '30vh' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 h-full">
          {/* Contact Us */}
          <p className="text-lg font-medium">
            Contact us: <a href="mailto:info@eigengram.com" className="underline">info@eigengram.com</a>
          </p>
          
          {/* Locations */}
          <p className="text-lg font-medium mt-4 md:mt-0">
            India | USA
          </p>
        </div>
      </footer>
    );
  }
  