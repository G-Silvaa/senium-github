import { Component, OnInit, HostListener } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-initial-page",
  templateUrl: "./initial-page.component.html",
  styleUrls: ["./initial-page.component.scss"],
})
export class InitialPageComponent implements OnInit {
  onCardRegisterProceed() {
    console.log("Card register proceeded");
  }

  cards = [
    {
        title: "",
        content:
            "Competências maduras como comprometimento, inteligência emocional, persuasão e comunicação assertiva são cruciais para o sucesso organizacional.",
            image: "../../../assets/Icone.svg",
    },
    {
        title: "",
        content:
            "Senium aspira ser uma referência em iniciativas que impactam diretamente o mercado de trabalho para maiores de 50 anos.",
            image: "../../../assets/card2.svg",
    },
    {
        title: "",
        content:
            "Processos seletivos e formação de banco de talentos 50+. Hunting completo e customizado, oferecido gratuitamente aos candidatos.",
            image: "../../../assets/card3.svg",
    },
    {
        title: "",
        content:
            "Oferecemos programas de Educação e Inclusão, Consultoria em Diversidade Etária para líderes e formação de grupos multigeracionais.",
            image: "../../../assets/Icone.svg",
    },
];
  

  socialMediaIcons = [
    {
        icon: "../../../assets/Facebook.svg",
        link: "https://www.facebook.com/people/Senium-Longevidade-Saudável/61550724605373/",
    },
   
    {
      icon: "../../../assets/Instagram.svg",
      link: "https://www.instagram.com/seniumlongevidade/",
  },
  {
    icon: "../../../assets/Linkedin.svg",
    link: "https://www.linkedin.com/in/senium-longevidade-saudável-ba61b5284/",
},
];

  swiper: Swiper | undefined;

  constructor() {}

  ngOnInit(): void {
    this.checkWindowSize();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (window.innerWidth < 700) {
      this.initSwiper();
    } else {
      if (this.swiper) {
        this.swiper.destroy();
      }
    }
  }

  isMobile(): boolean {
    return window.innerWidth < 952;
  }

  initSwiper(): void {
    if (!this.swiper) {
      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          700: {
            slidesPerView: 2,
          },
        },
      });
    }
  }
}
