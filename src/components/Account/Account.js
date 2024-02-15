
import YourAccount from "./YourAccount";
import Cards from "./Cards";
import Slider from "../Orders/slider";

function Account() {
  const hrStyle = {
    width: '92%',
    height: '1px',
    backgroundColor: '#58B310',
    border: 'none',
    marginTop: '70px',
    position: 'relative',
  };

  return <div style={{ paddingBlock: "7vh" }}>
    <YourAccount />
    <hr style={hrStyle} />
    <Cards />
    <hr style={hrStyle} />
    <div style={{ paddingInline: "5vw" }}> <Slider /></div>
  </div>;
}

export default Account;
