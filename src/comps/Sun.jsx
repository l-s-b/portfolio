import React from "react";

export default function Sun({size, darkHex, lightHex}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="-6 -6 76 76"
            className="pointer"
        >
            <g>
                <circle
                    fillRule="evenodd"
                    fill={lightHex}
                    cx="32"
                    cy="32"
                    r="32"
                    stroke={lightHex}
                    strokeWidth="12px"
                />
                <g fill={darkHex}>
                    <circle fillRule="evenodd" cx="32" cy="32" r="16"/>
                    <path fillRule="evenodd" d="M12,32c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,36,12,34.208,12,32z" />
                    <path fillRule="evenodd" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"/>
                    <path fillRule="evenodd" d="M32,52c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4C36,53.788,34.21,52,32,52z"/>
                    <path fillRule="evenodd" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"/>
                    <path fillRule="evenodd" d="M60,28l-4,0 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64,29.79,62.217,27.997,60,28z"/> 
                    <path fillRule="evenodd" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"/>
                    <path fillRule="evenodd" d="M32,12c2.207,0.016,4-1.789,4-4v-4 c0-2.219-1.789-4-4-4c-2.211-0-4,1.781-4,3.993l0,4.008C28,10.206,29.792,12,32,12z"/>
                    <path fillRule="evenodd" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"/>
                </g>
            </g>
        </svg>
    )
};