import { FaTachometerAlt, FaAddressBook, FaFileAlt, FaTasks, FaFolder, FaChartBar, FaCog, FaRobot } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-56 bg-[#092135] text-white flex flex-col justify-between">
      <div>
        <div className="bg-[#2ECC71] text-black font-bold text-center py-4">
          <div className="text-xl">TRADE<span className="text-[#092135] bg-white px-1">X</span></div>
          <div className="text-xs tracking-wide">TECHNOLOGIES</div>
        </div>
        <nav className="flex flex-col p-4 gap-4 text-sm font-semibold">
          <a href="#" className="flex items-center gap-2"><FaTachometerAlt /> Dashboard</a>
          <a href="#" className="flex items-center gap-2"><FaAddressBook /> Contacts</a>
          <a href="#" className="flex items-center gap-2"><FaFileAlt /> Quotes</a>
          <a href="#" className="flex items-center gap-2"><FaTasks /> Tasks</a>
        </nav>
      </div>
      <div className="flex flex-col p-4 gap-4 text-sm font-semibold">
        <a href="#" className="flex items-center gap-2"><FaFolder /> Documents</a>
        <a href="#" className="flex items-center gap-2"><FaChartBar /> Reports</a>
        <a href="#" className="flex items-center gap-2"><FaCog /> Settings</a>
        <a href="#" className="flex items-center justify-center gap-2 mt-2 bg-[#011F2A] p-2 rounded"><FaRobot className="text-[#2ECC71]" /> Dex</a>
      </div>
    </div>
  );
}