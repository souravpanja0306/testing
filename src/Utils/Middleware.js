let mainData = [
    {
        name: "Mihir Chandra Das",
        address: "Notun Gram, Bankura",
        mobile: "7278159888",
        with: "With Family"
    }
]

module.exports.middleware = ({
    mobile = ""
}) => {
    try {
        let defaultResponse = {
            is_authenticated: false,
            data: {},
        };
        let findIndex = mainData.findIndex((item) => item.mobile === mobile)
        if (findIndex > -1) {
            defaultResponse = {
                is_authenticated: true,
                data: mainData[findIndex],
            };
        };
        return defaultResponse;
    } catch (error) {
        console.log(error)
    };
};