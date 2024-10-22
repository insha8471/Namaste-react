import { useState } from "react";

const useOnlineStatus = () => {
    const [onelineStatus, setOnlineStatus] = useState(true);

    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    })

    window.addEventListener("online", () => {
        setOnlineStatus(true);
    })

    return onelineStatus;
}

export default useOnlineStatus;