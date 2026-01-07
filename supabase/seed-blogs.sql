-- Sample blog data for CryoVault matching current structure
-- Run this after setting up the schema

-- Insert sample blogs
INSERT INTO blogs (
  title,
  slug,
  excerpt,
  content,
  image,
  author,
  date,
  read_time,
  category,
  tags,
  published,
  featured,
  meta_title,
  meta_description,
  published_at
) VALUES 
(
  'The Future of Stem Cell Banking: Latest Medical Breakthroughs',
  'future-stem-cell-banking-breakthroughs',
  'Discover the latest advancements in stem cell research and how they''re revolutionizing treatment options for families worldwide.',
  '<h2>Introduction</h2><p>Stem cell banking has revolutionized modern medicine, offering unprecedented opportunities for treating various diseases and conditions. As we look toward the future, exciting breakthroughs continue to emerge in this rapidly evolving field.</p><h2>Recent Medical Breakthroughs</h2><p>Recent studies have shown remarkable progress in using stem cells to treat conditions previously thought untreatable. From spinal cord injuries to heart disease, researchers are discovering new applications for these powerful cells.</p><h3>Neurological Applications</h3><p>One of the most promising areas of stem cell research involves treating neurological conditions. Clinical trials have shown encouraging results in treating conditions such as:</p><ul><li>Spinal cord injuries</li><li>Parkinson''s disease</li><li>Multiple sclerosis</li><li>Stroke recovery</li></ul><h3>Cardiovascular Treatments</h3><p>Stem cells are also showing promise in treating heart disease, with researchers developing methods to regenerate damaged heart tissue and improve cardiac function.</p><h2>The Future Outlook</h2><p>As technology advances and our understanding of stem cells deepens, we can expect even more groundbreaking treatments to emerge. The future of stem cell banking looks brighter than ever.</p><h2>Conclusion</h2><p>Investing in stem cell banking today means investing in the medical possibilities of tomorrow. With each breakthrough, the value of preserved stem cells continues to grow.</p>',
  '/placeholder.jpg',
  'Dr. Sarah Johnson',
  '2024-01-15',
  '5 min read',
  'Medical Research',
  ARRAY['stem cells', 'medical breakthroughs', 'research', 'future medicine'],
  true,
  true,
  'The Future of Stem Cell Banking: Latest Medical Breakthroughs | CryoVault',
  'Discover the latest advancements in stem cell research and how they''re revolutionizing treatment options for families worldwide.',
  '2024-01-15'::timestamp
),
(
  'Understanding Cord Blood Banking: A Parent''s Complete Guide',
  'cord-blood-banking-parents-guide',
  'Everything expectant parents need to know about cord blood banking, from collection to storage and potential medical applications.',
  '<h2>What is Cord Blood Banking?</h2><p>Cord blood banking involves collecting and storing the blood from your baby''s umbilical cord after birth. This blood contains valuable stem cells that could potentially treat various diseases.</p><h2>The Collection Process</h2><p>The collection process is simple, safe, and painless for both mother and baby. It takes place immediately after birth and doesn''t interfere with the delivery process.</p><h2>Storage and Preservation</h2><p>Once collected, the cord blood is processed and stored in specialized cryogenic facilities where it can remain viable for decades.</p><h2>Medical Applications</h2><p>Cord blood stem cells are currently used to treat over 80 different diseases, including various cancers, blood disorders, and immune system conditions.</p>',
  '/placeholder.jpg',
  'Dr. Michael Chen',
  '2024-01-12',
  '8 min read',
  'Parent Guide',
  ARRAY['cord blood', 'parents guide', 'stem cells', 'banking'],
  true,
  true,
  'Understanding Cord Blood Banking: A Parent''s Complete Guide | CryoVault',
  'Everything expectant parents need to know about cord blood banking, from collection to storage and potential medical applications.',
  '2024-01-12'::timestamp
),
(
  'Success Stories: How Stem Cells Saved Lives',
  'stem-cells-success-stories',
  'Real stories from families whose lives were transformed by stem cell treatments, showcasing the life-saving potential of cord blood banking.',
  '<h2>Emma''s Story: Overcoming Leukemia</h2><p>When 5-year-old Emma was diagnosed with acute lymphoblastic leukemia, her family''s decision to bank her brother''s cord blood proved life-saving. The perfectly matched stem cells helped Emma recover completely.</p><h2>The Johnson Family: A Second Chance</h2><p>After years of struggling with a rare blood disorder, young Michael Johnson received a stem cell transplant using his own banked cord blood, leading to a full recovery.</p><h2>Hope for the Future</h2><p>These success stories represent just the beginning. As research continues, we expect to see even more applications for stored stem cells.</p>',
  '/placeholder.jpg',
  'Dr. Emily Rodriguez',
  '2024-01-10',
  '6 min read',
  'Success Stories',
  ARRAY['success stories', 'stem cell treatment', 'patient stories', 'recovery'],
  true,
  false,
  'Success Stories: How Stem Cells Saved Lives | CryoVault',
  'Real stories from families whose lives were transformed by stem cell treatments, showcasing the life-saving potential of cord blood banking.',
  '2024-01-10'::timestamp
),
(
  'The Science Behind Stem Cell Preservation',
  'science-stem-cell-preservation',
  'Explore the advanced cryopreservation techniques that keep stem cells viable for decades, ensuring they''re ready when needed.',
  '<h2>Cryopreservation Technology</h2><p>Our state-of-the-art cryopreservation technology ensures that stem cells remain viable for decades. Using liquid nitrogen at -196°C, we can effectively pause biological time.</p><h2>Quality Control Measures</h2><p>Every sample undergoes rigorous testing and quality control measures to ensure the highest standards of preservation and viability.</p><h2>Long-term Viability</h2><p>Studies have shown that properly stored stem cells can remain viable for over 25 years, with some research suggesting even longer periods are possible.</p>',
  '/placeholder.jpg',
  'Dr. James Wilson',
  '2024-01-08',
  '7 min read',
  'Science',
  ARRAY['cryopreservation', 'science', 'technology', 'storage'],
  true,
  false,
  'The Science Behind Stem Cell Preservation | CryoVault',
  'Explore the advanced cryopreservation techniques that keep stem cells viable for decades, ensuring they''re ready when needed.',
  '2024-01-08'::timestamp
),
(
  'Comparing Private vs Public Cord Blood Banking',
  'private-vs-public-cord-blood-banking',
  'Understanding the differences between private and public cord blood banking to make the best decision for your family.',
  '<h2>Private Cord Blood Banking</h2><p>Private banking means storing your baby''s cord blood exclusively for your family''s use. This ensures immediate availability and a perfect genetic match.</p><h2>Public Cord Blood Banking</h2><p>Public banking involves donating cord blood to a public registry where it can be used by anyone who needs a match.</p><h2>Making the Right Choice</h2><p>The decision between private and public banking depends on your family''s medical history, financial considerations, and personal preferences.</p>',
  '/placeholder.jpg',
  'Dr. Lisa Thompson',
  '2024-01-05',
  '4 min read',
  'Education',
  ARRAY['private banking', 'public banking', 'comparison', 'decision making'],
  true,
  false,
  'Comparing Private vs Public Cord Blood Banking | CryoVault',
  'Understanding the differences between private and public cord blood banking to make the best decision for your family.',
  '2024-01-05'::timestamp
);

-- Update view counts for some blogs
UPDATE blogs SET view_count = 150 WHERE slug = 'future-stem-cell-banking-breakthroughs';
UPDATE blogs SET view_count = 89 WHERE slug = 'cord-blood-banking-parents-guide';
UPDATE blogs SET view_count = 67 WHERE slug = 'stem-cells-success-stories';
UPDATE blogs SET view_count = 45 WHERE slug = 'science-stem-cell-preservation';
UPDATE blogs SET view_count = 23 WHERE slug = 'private-vs-public-cord-blood-banking';