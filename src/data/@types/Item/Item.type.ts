export type ItemType = {
    ItemTitle: string;
    isChecked?: boolean;
    ItemData: number;
    onCheck: (isChecked: boolean) => void;
    onDelete: () => void;
}
