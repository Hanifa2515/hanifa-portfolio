import { marqueeItems } from "../content";

export default function Marquee() {
  // The list renders twice so the -50% animation loops without a visible jump.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
