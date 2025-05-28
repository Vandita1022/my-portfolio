import React from "react";
import PageWrapper from "../components/PageWrapper";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import NeonLogo from '../components/NeonLogo';

const Projects = () => {
  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
          title="ConvertPlus Plugin"
          description="Powerful popup plugin for converting visitors into subscribers and customers."
          buttons={["Demo", "Code"]}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
          title="ACF Pro"
          description="Add custom fields to WordPress edit screens with this advanced plugin."
          buttons={["Code"]}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
          title="LayerSlider"
          description="Multi-purpose animation platform for sliders and web effects."
          buttons={["Demo"]}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
          title="Slider Revolution"
          description="Create beautiful sliders and carousels with advanced effects."
          buttons={["Demo", "Code"]}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg"
          title="Progressive Web App"
          description="Enhance performance and offline experience with PWA integration."
          buttons={["Code"]}
        />
      ),
    },
  ];

  return (
    <PageWrapper>
      <div className="w-full md:w-1/2 mx-auto mt-12 mb-12">
        <NeonLogo text="Projects" />
        <Carousel
          cards={cards}
          height="500px"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </PageWrapper>
  );
};

export default Projects;
