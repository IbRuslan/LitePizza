import React from "react"
import ContentLoader from "react-content-loader"

export const PizzaSkeleton = () => (
    <ContentLoader
        className={'pizza-block'}
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="133" cy="131" r="130" />
        <rect x="318" y="96" rx="0" ry="0" width="3" height="0" />
        <rect x="10" y="274" rx="15" ry="15" width="255" height="26" />
        <rect x="7" y="314" rx="11" ry="11" width="261" height="88" />
        <rect x="10" y="428" rx="5" ry="5" width="90" height="33" />
        <rect x="142" y="422" rx="20" ry="20" width="122" height="43" />
    </ContentLoader>
)