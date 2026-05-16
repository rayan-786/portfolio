import { useState } from "react";

function GithubFinder() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {

    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {

      const res = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();

      setUser(data);

    } catch (err) {

      setError("User not found ❌");

    }

    setLoading(false);

  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white px-4 py-10 flex items-center justify-center">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* MAIN CONTAINER */}

      <div className="relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-8 shadow-2xl">

        {/* TITLE */}

        <div className="text-center">

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight break-words">
            GitHub Profile Finder
          </h1>

          <p className="mt-4 text-slate-400 text-sm sm:text-lg break-words">
            Search any GitHub user and explore their profile 🚀
          </p>

        </div>

        {/* SEARCH */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <input
            type="text"
            placeholder="Enter GitHub username..."
            className="
              flex-1
              rounded-2xl
              border
              border-white/10
              bg-slate-950/70
              px-5
              py-4
              text-sm
              sm:text-base
              text-white
              outline-none
              transition-all
              placeholder:text-slate-500
              focus:border-cyan-400
              focus:ring-4
              focus:ring-cyan-400/20
            "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            onClick={fetchUser}
            className="
              w-full
              sm:w-auto
              rounded-2xl
              bg-cyan-400
              px-8
              py-4
              text-sm
              sm:text-base
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:scale-105
              hover:bg-cyan-300
              active:scale-95
            "
          >
            Search
          </button>

        </div>

        {/* LOADING */}

        {loading && (

          <p className="mt-6 text-center text-cyan-400 animate-pulse text-sm sm:text-base">
            Loading...
          </p>

        )}

        {/* ERROR */}

        {error && (

          <p className="mt-6 text-center text-red-400 text-sm sm:text-base break-words">
            {error}
          </p>

        )}

        {/* USER CARD */}

        {user && (

          <div
            className="
              mt-10
              rounded-3xl
              border
              border-white/10
              bg-slate-900/60
              p-5
              sm:p-8
              shadow-xl
              backdrop-blur-lg
            "
          >

            <div className="flex flex-col items-center gap-6 sm:flex-row">

              {/* IMAGE */}

              <img
                src={user.avatar_url}
                alt="profile"
                className="
                  h-28
                  w-28
                  sm:h-32
                  sm:w-32
                  rounded-full
                  border-4
                  border-cyan-400
                  object-cover
                  shadow-lg
                "
              />

              {/* INFO */}

              <div className="flex-1 text-center sm:text-left break-words">

                <h2 className="text-2xl sm:text-3xl font-bold break-words">
                  {user.name || user.login}
                </h2>

                <p className="mt-1 text-slate-400 text-sm sm:text-lg break-all">
                  @{user.login}
                </p>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-7 break-words">
                  {user.bio || "No bio available"}
                </p>

                {/* STATS */}

                <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">

                  <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300 text-xs sm:text-sm">
                    👥 {user.followers} Followers
                  </div>

                  <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300 text-xs sm:text-sm">
                    📁 {user.public_repos} Repositories
                  </div>

                  <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300 text-xs sm:text-sm">
                    👤 {user.following} Following
                  </div>

                </div>

                {/* BUTTON */}

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-block
                    mt-6
                    w-full
                    sm:w-auto
                    rounded-xl
                    bg-cyan-400
                    px-6
                    py-3
                    text-sm
                    sm:text-base
                    font-semibold
                    text-slate-950
                    text-center
                    transition-all
                    duration-300
                    hover:bg-cyan-300
                    hover:scale-105
                  "
                >
                  View GitHub Profile
                </a>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default GithubFinder;