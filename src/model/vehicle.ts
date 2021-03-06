export interface VehicleEntity {
    idVehicle: number;
    brand?: string;//marca
    model?: string;
    vehicleType: string;
    plate?: string;
    frame?: string;
    pic?: [{img:{data:string,contentType:string}}];
}