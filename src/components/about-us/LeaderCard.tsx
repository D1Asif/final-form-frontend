type teamMemberInfo = {
    name: string,
    role: string,
    image: string
} 

export default function LeaderCard({teamMemberInfo}: {teamMemberInfo: teamMemberInfo}) {
    return (
        <div>
            <img
                className="mx-auto rounded-md md:rounded-xl w-full"
                src={teamMemberInfo.image}
            />
            <div className="">
                <div className="text-2xl font-semibold mt-3 mb-1">
                    {teamMemberInfo.name}
                </div>
                <div className="text-xl text-gray-500">
                    {teamMemberInfo.role}
                </div>
                {/* <p className="text-lg text-gray-400 mt-3">
                    John has over 15 years of experience in the tech industry, leading innovative projects in AI and machine learning.
                </p> */}
            </div>
        </div>
    )
}
