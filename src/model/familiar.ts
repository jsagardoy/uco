export interface FamiliarEntity {
  idFamiliar: number;
  editable: boolean;
  nameFamiliar: string;
  familiarPics?: [{ img: { data: string; contentType: string } }];
  familiarAddress?: string;
  addressLink?: string;
  related?: string;
}
