import './ParagraphText.css';
function ParagraphText({ fontSize, text }) {
    return (
        <p className={`p-text fs${fontSize}`} style={{ whiteSpace: 'pre-line' }}>{text}</p>
    );
}

export default ParagraphText;
