/*
  # Create Psychotherapist Website Tables

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Client name or initials
      - `role` (text) - Optional role/description
      - `content` (text) - Testimonial text
      - `rating` (integer) - Rating out of 5
      - `image_url` (text, nullable) - Optional avatar image
      - `created_at` (timestamptz) - Creation timestamp
      - `published` (boolean) - Whether testimonial is visible
      
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly identifier
      - `excerpt` (text) - Short description
      - `content` (text) - Full blog post content
      - `author` (text) - Author name
      - `image_url` (text, nullable) - Featured image
      - `category` (text) - Blog category
      - `published` (boolean) - Whether post is visible
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access to published content
    - Restrict write operations to authenticated users only

  3. Important Notes
    - Both tables use RLS to protect unpublished content
    - Public users can only view published testimonials and blog posts
    - Only authenticated users can create, update, or delete content
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text DEFAULT '',
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT true
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text DEFAULT 'Dr. Sarah Thompson',
  image_url text,
  category text DEFAULT 'Mental Health',
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Authenticated users can view all testimonials"
  ON testimonials FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_testimonials_published ON testimonials(published, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);