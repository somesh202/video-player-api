import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "fixed",
        width: "100%",
        overflow: "hidden",
        background: "black",
        zIndex: 999,
        boxShadow:
          "box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <YouTubeIcon
          color="error"
          fontSize="large"
          sx={{ width: "100px", fontSize: "80px" }}
        />
      </Link>
      <div className="lg:block hidden">
      <SearchBar />
      </div>
    </Stack>
  );
}
export default Navbar;
