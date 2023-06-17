

const Author = ({author}) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
            <div className="absolute left-0 right-0 -top-14">
                <div className="flex w-full items-center justify-center">
                    <img
                        src={author.photo.url}
                        alt={author.name}
                        className="align-middle rounded-full"
                        width={100}
                        height={100}
                        style={{height: '100px'}}
                    ></img>
                </div>
            </div>
            <h3 className="text-white text-xl font-bold mb-4 mt-4">{author.name}</h3>
            <p className="text-white text-lg">{author.bio}</p>
        </div>
    )
}

export default Author;