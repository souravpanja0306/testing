let mainData = [
    { name: "Sri Mihir Chandra Das", address: "Notun Gram, Bankura.", code: "1010", with: "With Family" },
    { name: "Sri Jagabandhu Das", address: "Banshkopa, Durgapur.", code: "1011", with: "With Family" },
    { name: "Sri Dinabandhu Das", address: "Banshkopa, Durgapur.", code: "1012", with: "With Family" },
    { name: "Sri Sahadev Das", address: "Notun Gram, Bankura.", code: "1013", with: "With Family" },
    { name: "Sri Jagabandhu Das", address: "Purulia.", code: "1014", with: "With Family" },
    { name: "Sri Pranab Bairagi", address: "Bankura.", code: "1015", with: "With Family" },
    { name: "Sri Pranab Bairagi", address: "Bankura.", code: "1015", with: "With Family" },

    // My Family
    { name: "Sri Vinod Panja", address: "Behela, Kolkata.", code: "2101", with: "With Family" },
    { name: "Sri Monoj Panja", address: "Durgapur.", code: "2102", with: "With Family" },
    { name: "Sri Ratan Panja", address: "Durgapur.", code: "2103", with: "With Family" },
    { name: "Sri Manaranjan Panja", address: "Durgapur.", code: "2104", with: "With Family" },

    // Rina's Family
    { name: "Sri Sukumar Halder", address: "Sonarpur.", code: "3201", with: "With Family" },
    { name: "Sri Sambhu Halder", address: "Hide Road, Kolkata.", code: "3201", with: "With Family" },

    // Friends
    { name: "Sonu Kumar Shaw", address: "Sibarampur, Kolkata.", code: "4301", with: "With Family" },
    { name: "Raj Kishan Prasad", address: "Hide Road, Kolkata.", code: "4302", with: "With Family" },
    { name: "Rahul Kumar Bind", address: "Hide Road, Kolkata.", code: "4303", with: "With Family" },
    { name: "Kripa Sindhu Mondal", address: "Hide Road, Kolkata.", code: "4305", with: "With Family" },

    { name: "Sumit Maity", address: "BNR, Kolkata.", code: "4306", with: "" },
    { name: "Biswanath Goala", address: "Hide Road, Kolkata.", code: "4304", with: "" },
    { name: "Akash Naiya", address: "BNR, Kolkata.", code: "4307", with: "" },
    { name: "Debangshu Biswas", address: "Santragachi, Howrah.", code: "4308", with: "" },
    { name: "Asif", address: "Khiderpore, Kolkata.", code: "4309", with: "" },
    { name: "Amir Hussain", address: "Khiderpore, Kolkata.", code: "4309", with: "" },
    { name: "Sagar", address: "Kolkata.", code: "4310", with: "" },
    { name: "Sampa Sardar", address: "Kolkata.", code: "4311", with: "" },
    { name: "Debasish & Priyanka", address: "Kolkata.", code: "4312", with: "" },
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