// src/components/icons/CustomIcon.js
import {
  Banknote,
  CreditCard,
  ArrowLeftRight,
  Shield,
  Bell,
  Coins,
  // Agrega más íconos según necesites
} from "lucide-react";

const iconMap = {
  bank: Banknote,
  card: CreditCard,
  transfer: ArrowLeftRight,
  security: Shield,
  notification: Bell,
  loan: Coins,
};

export default function CustomIcon({ icon, size = 24, color = "currentColor", className = "" }) {
  const IconComponent = iconMap[icon];
  
  if (!IconComponent) {
    console.warn(`Ícono "${icon}" no encontrado`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
}