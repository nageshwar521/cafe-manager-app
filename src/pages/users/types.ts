export interface RowDetailsInterface {
  nodeItem?: any;
  colDef?: any;
  formData: any;
  isEdit?: boolean;
}

export interface UserDetailsProps {
  mode?: "view" | "edit" | "create";
  onClose?: () => void;
  rowDetails: RowDetailsInterface | null;
  onSubmit: (data: any) => void;
}
