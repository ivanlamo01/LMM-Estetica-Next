import ControlledCarousel from "./ui/components/carousel";
import slide1 from "@/Assets/dherma-science-treatment-oil-lidherma-aceite-antiage-toque-seco-1.jpg";
import slide2 from "@/Assets/Combo-Hyaluronic-4D-Plus-woo-scaled.webp";
import styles from "./styles/main.module.css"
import { kaushan } from "@/lib/fonts";

export default function Home() {
  const images = [slide1.src, slide2.src]

  return (
    <>
    <div className={styles.home}>
      <main className={styles.main}>
          <section className={styles.text}>
            <span className={`${kaushan.className} antialiased text-lid-red` }>lmm</span>
            <span>Estetica</span>
            <span className={styles.text3}>Centro de Estetica y Beauty Store</span>
            <span className={styles.text4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic necessitatibus perferendis assumenda animi cum, dolor consectetur qui dolorem inventore aspernatur, earum laboriosam asperiores rem, veniam facere. Aliquid, doloremque dolorum!</span>
            <div className={styles.buttons}>
              <button className={styles.prodButton}>
                Buscar productos
              </button>
              <button className={styles.prodButton}>
                Nuestros Servicios
              </button>
            </div>
          </section>
        </main>
        <div className={styles.car}>
            <ControlledCarousel images={images} />
        </div>
    </div>

    </>
  );
}
