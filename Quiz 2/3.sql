SELECT users.name, count(posts.title) AS post_count FROM users JOIN posts ON users.id = posts.user_id;