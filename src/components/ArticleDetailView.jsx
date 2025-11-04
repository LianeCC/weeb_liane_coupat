import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiGet } from "../services/api";

export default function ArticleDetailView() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiGet(`/api/posts/${slug}/`)
      .then(setPost)
      .catch((e) => setError(e.message));
  }, [slug]);

  return (
    <div className="w-full px-6 max-w-[800px] mx-auto py-10 text-left">
      <Link to="/articles" className="opacity-80 hover:opacity-100">&larr; Retour</Link>

      {error && (
        <div className="mt-6 p-4 rounded-xl bg-red-600/20 border border-red-400/40">
          Erreur : {error}
        </div>
      )}
      {!post && !error && <p className="mt-6 opacity-80">Chargement…</p>}

      {post && (
        <article className="mt-6">
          <h1 className="mb-4">{post.title}</h1>
          <div className="text-sm opacity-70 mb-8">
            <span>Auteur : {post.author || "Anonyme"}</span> •{" "}
            <span>Publié le {new Date(post.created_at).toLocaleDateString()}</span>
          </div>
          <p className="opacity-90 whitespace-pre-wrap">{post.content}</p>
        </article>
      )}
    </div>
  );
}
