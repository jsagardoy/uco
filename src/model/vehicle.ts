export interface VehicleEntity {
  idVehicle: number;
  editable: boolean;
  brand?: string;
  model?: string;
  vehicleType: string;
  plate?: string;
  frame?: string;
  pic?: [{ img: { data: string; contentType: string } }];
}
