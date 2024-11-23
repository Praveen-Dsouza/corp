import homeImg from '/public/home.jpg';
import Body from "@/components/body";

export default function Home() {
  return (
    <Body imgData={homeImg} imgAlt='car factory' title='Professional Cloud Hosting'/>
  );
}
