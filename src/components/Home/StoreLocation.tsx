import { MapPin } from 'lucide-react';
const StoreLocation = () => {
  // This is the store location (replace with your actual coordinates)
  const storeLocation = {
    lat: 37.9838,
    // Example: Athens, Greece coordinates
    lng: 23.7275
  };
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Βρείτε μας</h2>
          <p className="text-lg text-gray-600">
            Επισκεφθείτε το κατάστημά μας για να δείτε από κοντά τις υπηρεσίες μας.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <div className="bg-greek-skyBlue/20 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Στοιχεία Επικοινωνίας</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-greek-blue mr-2" />
                  <span> Διεύθυνση: Παλαιά Ε.Ο. Κορίνθου Πατρών Στόμιο Κορινθίας 136χλμ Παλαιάς Εθνικής .Οδού Αθηνών - Πατρων, Στόμιο 200 09  - Τηλ. Επικοινωνίας: +302743051762</span>
                </div>
                <div>
                  <p>Τηλέφωνο: <span className="text-greek-blue font-medium">210 1234567</span></p>
                  <p>Email: <span className="text-greek-blue font-medium">info@motobikes.gr</span></p>
                </div>
                <div>
                  <h4 className="font-medium mt-2">Ωράριο Λειτουργίας:</h4>
                  <p>Δευτέρα - Παρασκευή: 9:00 - 18:00</p>
                  <p>Σάββατο: 9:00 - 15:00</p>
                  <p>Κυριακή: Κλειστά</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe title="Store Location" className="w-full h-full border-0" frameBorder="0" src={`https://www.google.com/maps/embed/v1/place?q=${storeLocation.lat},${storeLocation.lng}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=15`} allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>;
};
export default StoreLocation;