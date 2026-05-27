import './ParagraphText.css';
function ParagraphText({ fontSize, text }) {

    return (
        <p className={`p-text fs${fontSize}`}>{text}</p>
    );
}

export default ParagraphText;
