import CoolText from "components/CoolText";
import Card from "components/Styles";
const Page = () => {
  return (
    <div className={`my-5 space-y-1 ${Card}`}>
      <CoolText speed={100}>
        Humberto Navarro
      </CoolText>
      <CoolText delay={100}>
        Full Stack Web Developer
      </CoolText>
      <hr></hr>
      <p>
        Welcome to my portfolio.
      </p>

    </div>
  );
}
export default Page;
