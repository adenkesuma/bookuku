import { FC } from 'react' 

interface MarkdownLiteProps {
    text: string
}
 
const MarkdownLite: FC<MarkdownLiteProps> = ({ text }) => {
    return (  
        <div>markdownlite</div>
    );
}
 
export default MarkdownLite;