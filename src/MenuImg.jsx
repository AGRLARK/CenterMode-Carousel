import PropTypes from "prop-types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./index.css";

const MenuImg = ({ imgSrc, onClose }) => {
  return (
    <div className="menu-img-overlay">
      <div className="menu-img-content">
        <button onClick={onClose} className="back-btn">
          <ArrowBackIcon />
        </button>
        <img
          src={imgSrc}
          alt="Selected Image"
          style={{ height: "212vw", width: "97vw" }}
        />
      </div>
    </div>
  );
};

MenuImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuImg;
