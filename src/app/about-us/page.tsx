import SelectDpt from "./Departments/SelectDep"
import TextPart from "./textPart/textPart"


import firstImg from '/public/AboutUs.jpg'
import ImageWText from "@/app/CommonComponents/ImageWText/ImageWText"

export default function Home() {

  return (
    <main  >

      <ImageWText image={firstImg} title="About us" description="Meet our incredible team" />
      <TextPart />
      <SelectDpt />

    </main>
  );
}
