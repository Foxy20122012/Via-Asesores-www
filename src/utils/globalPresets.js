const theme = "skyblue";

const presets = {
  theme: `${theme}`,
  appTitle: "SmartCollector",
  svgIconUrl: "https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg",
  images: {
    loginFondo:
      "https://www.via-asesores.com/backgrounds/common/bg_001_meeting.png",
    welcomeFondo:
      "https://www.via-asesores.com/backgrounds/common/bg_001_meeting.png",
    icon: "https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg",
    logo: "https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg",
    imageLoader:
      "https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg",
  },
  locations: {
    login: `/`,
    welcome: `/nosotros`,
    profile: `/`,
  },
  toaster: {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  },
  pristine: {
    // class of the parent element where the error/success class is added
    classTo: "form-group",
    errorClass: "ring-red-400",
    successClass: "has-success",
    // class of the parent element where error text element is appended
    errorTextParent: "form-group",
    // type of element to create for the error text
    errorTextTag: "div",
    // class of the error text element
    errorTextClass: "text-help text-red-500 text-sm py-1",
  },
  graphOptions: {
    interaction: {
      dragNodes: false,
      dragView: true,
      hover: true,
    },
    layout: {
      hierarchical: {
        enabled: true,
        levelSeparation: 200,
        nodeSpacing: 200,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: "LR", // UD, DU, LR, RL
        sortMethod: "hubsize", // hubsize, directed
        shakeTowards: "leaves", // roots, leaves
      },
    },
    edges: {
      color: "#000000",
    },
    height: "700px",
    physics: {
      enabled: false,
      // maxVelocity: 50,
      // minVelocity: 0.1,
      // solver: "barnesHut",
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 100,
        onlyDynamicEdges: false,
        fit: true,
      },
    },
  },
};

export default presets;