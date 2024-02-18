import { FooterItem } from "@/constants";

type Props = {
    title: string;
    items: FooterItem[];
};

const PanelList = ({ title, items }: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default PanelList;