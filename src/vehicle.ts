interface Vehicle {
    name: string;
    type: string;
    speed: number;
}
interface Motor extends Vehicle {
    fuelType: string;
}
// Tính thời gian đi quãng đường    
function calculateTraveltime(vehicle: Vehicle, distance: number): number {
    return distance / vehicle.speed
}
const vehicles: Motor[] = [
  { name: "Xe máy", type: "Xe máy", speed: 60, fuelType: "Xăng" },
  { name: "Ô tô điện", type: "Ô tô", speed: 80, fuelType: "Điện" },
  { name: "Ô tô xăng", type: "Ô tô", speed: 120, fuelType: "Xăng" }
];
//Tính thời gian cho 100km  
vehicles.forEach(v =>{
    console.log(`${v.name} đi 100km mất ${calculateTraveltime(v, 100)}giờ`);
});