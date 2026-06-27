import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function WhatsAppButton() {

  const phone = "919548591477";

  const message =
    "Hi Rayan, I visited your portfolio and would like to connect.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
   <motion.a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{
    delay: 1,
    duration: 0.4,
  }}
  whileHover={{
    scale: 1.12,
    rotate: 8,
  }}
  whileTap={{
    scale: 0.9,
  }}
  className="
group
fixed
bottom-24
right-5
z-[60]
h-16
w-16
rounded-full
bg-gradient-to-br
from-green-500
to-green-600
text-white
flex
items-center
justify-center
shadow-2xl
shadow-green-500/40
transition-all
duration-300
"
>
    <FaWhatsapp
  size={32}
  className="relative z-20 text-white"
/>
<span
  className="
    absolute
    top-1
    right-1
    h-3
    w-3
    rounded-full
    bg-red-500
    animate-ping
  "
/>

<span
  className="
    absolute
    top-1
    right-1
    h-3
    w-3
    rounded-full
    bg-red-500
  "
/>
<span
  className="
    absolute
    right-20
    bg-green-600
    text-white
    text-xs
    px-3
    py-2
    rounded-lg
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    whitespace-nowrap
  "
>
  Chat on WhatsApp
</span>
</motion.a>

  );

}

export default WhatsAppButton;