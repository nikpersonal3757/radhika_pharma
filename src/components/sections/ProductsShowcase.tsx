import Image from "next/image";

type Product = {
  categoryLabel: string;
  name: string;
  price: string;
  size: string;
  therapeutic: string;
  image: string;
  imageAlt: string;
};

const PRODUCTS: Product[] = [
  {
    categoryLabel: "Suspension",
    name: "Sinaqure Suspension",
    price: "₹ 70",
    size: "60ml",
    therapeutic: "Anticough/Anticold/Antiallergics",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=640&q=80",
    imageAlt: "Medicine bottle representing oral suspension",
  },
  {
    categoryLabel: "Syrup",
    name: "Max Zyme (Digestive Enzyme Syrup)",
    price: "₹ 70",
    size: "200ml",
    therapeutic: "Gastrointestinal",
    image:
      "https://images.unsplash.com/photo-1585435558438-27e655ea5318?auto=format&fit=crop&w=640&q=80",
    imageAlt: "Amber syrup bottle suggesting digestive enzyme formulation",
  },
  {
    categoryLabel: "Soap",
    name: "Ketoqure (Medicated Soap)",
    price: "₹ 120",
    size: "75gm",
    therapeutic: "Derma",
    image:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=640&q=80",
    imageAlt: "Medicated soap bars for dermatological care",
  },
];

export function ProductsShowcase() {
  return (
    <section
      id="products"
      className="scroll-mt-[100px] bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center text-center">
          <span className="rounded-full bg-primary px-5 py-2 text-[13px] font-semibold text-white shadow-sm">
            Our Products
          </span>
          <h2
            id="products-heading"
            className="font-heading mt-6 max-w-3xl text-balance text-[clamp(1.85rem,3.8vw,2.65rem)] font-bold leading-snug tracking-tight text-secondary"
          >
            Browse through our most popular <span className="text-primary">products</span>
          </h2>
        </header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="tile-3d flex cursor-default flex-col overflow-hidden rounded-3xl border border-secondary/[0.12] bg-white shadow-card"
            >
              <div className="relative aspect-[4/3] bg-neutral-100">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-accent/95 px-3.5 py-1.5 text-[12px] font-semibold text-secondary shadow-sm ring-1 ring-primary/15">
                  {p.categoryLabel}
                </span>
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-lg font-bold leading-snug text-secondary">{p.name}</h3>
                  <span className="shrink-0 pt-0.5 text-lg font-bold tabular-nums text-secondary">
                    {p.price}
                  </span>
                </div>
                <p className="mt-2 text-[14px] text-muted">{p.size}</p>
                <p className="mt-auto pt-6 text-left text-[14px] leading-snug text-muted">{p.therapeutic}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
