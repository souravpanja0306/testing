let mainData = [
    { name: "Sri Mihir Chandra Das", gender: "male", address: "Notun Gram, Bankura", code: "3040", with: "With Family" },
    { name: "Sri Mihir Chandra Das", gender: "male", address: "Notun Gram, Bankura", code: "1011", with: "With Family" },
    { name: "Sri Sahadev Das", gender: "male", address: "Notun Gram, Bankura", code: "1012", with: "With Family" },
    { name: "Sri Sahadev Das", gender: "male", address: "Notun Gram, Bankura", code: "1013", with: "With Family" },

    // My Family
    { name: "Sri Vinod Panja", gender: "male", address: "Behela, Kolkata.", code: "2101", with: "With Family" },
    { name: "Sri Monoj Panja", gender: "male", address: "Durgapur", code: "2102", with: "With Family" },
    { name: "Sri Ratan Panja", gender: "male", address: "Durgapur", code: "2103", with: "With Family" },
    { name: "Sri Manaranjan Panja", gender: "male", address: "Durgapur", code: "2104", with: "With Family" },

    // Rina's Family
    { name: "Sri Sukumar Halder", gender: "male", address: "Sonarpur", code: "3201", with: "With Family" },

    // Friends
    { name: "Sri Sonu Kumar Show", gender: "male", address: "Sibarampur, Kolkata.", code: "4301", with: "With Family" },
    { name: "Sri Raj Kishan Prasad", gender: "male", address: "Hide Road, Kolkata.", code: "4302", with: "With Family" },
    { name: "Sri Rahul Kumar Bind", gender: "male", address: "Hide Road, Kolkata.", code: "4303", with: "With Family" },
    { name: "Sri Biswanath Goala", gender: "male", address: "Hide Road, Kolkata.", code: "4304", with: "With Family" },
    { name: "Sri Kripa Sindhu Mondal", gender: "male", address: "Hide Road, Kolkata.", code: "4305", with: "With Family" },
    { name: "Sri Sumit Maity", gender: "male", address: "BNR, Kolkata.", code: "4306", with: "With Family" },
    { name: "Sri Akash Naiya", gender: "male", address: "BNR, Kolkata.", code: "4307", with: "With Family" },
    { name: "Sri Debangshu Biswas", gender: "male", address: "Santragachi, Howrah.", code: "4308", with: "With Family" },
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