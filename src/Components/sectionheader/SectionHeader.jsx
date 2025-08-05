import './SectionHeader.css';
import IconStar from '../IconStar/IconStar';
/**
 * A reusable component to display a section title and optional subtitle.
 *
 * Example usage:
 * <SectionHeader
 *    title="Main Title"
 *    subtitle="Optional Subtitle"
 * />
 *
 * @component
 * @param {string} props.title - The main section title .
 * @param {string} [props.subtitle] - Optional subtitle.
 */
const SectionHeader = ({ title, subtitle }) => {
    return (
    <>
            <IconStar />
        <div className="section-header">

            <h2 className="section-title">{title}</h2>

            {subtitle && (
                <p className="section-subtitle">
                    {subtitle}
                </p>
            )}
        </div>
    </>        
    );
};

export default SectionHeader;
