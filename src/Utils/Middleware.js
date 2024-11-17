let mainData = [
    {
        name: "Mihir Chandra Das",
        gender: "male",
        address: "Notun Gram, Bankura",
        code: "3040",
        with: "With Family"
    },
    {
        name: "Rina Halder",
        gender: "female",
        address: "Sonarpur",
        code: "5785",
        with: "With Family"
    },
];

module.exports.middleware = ({
    code = ""
}) => {
    try {
        let defaultResponse = {
            is_authenticated: false,
            data: {},
        };
        let findIndex = mainData.findIndex((item) => item.code === code)
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