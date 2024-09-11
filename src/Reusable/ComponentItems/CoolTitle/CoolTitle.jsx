import "./CoolTitle.scss"

import Sparkles from "../../Animation/Sparkle/Sparkle"

export default function CoolTitle({children, size, color, ...props}) {
  return (<Sparkles>
    <div
        className="Cool-Title"
        style={{
          fontSize: size || "40px",
          color: color || "#f5d63f"
        }}
        {...props}
    >
      {children}
    </div>
  </Sparkles>)
}