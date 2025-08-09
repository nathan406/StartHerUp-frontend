import React, { useState } from 'react';
import { X, Upload, Plus, Minus, Calendar, User, Tag, Image as ImageIcon } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-pink-200 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>;

const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  const baseClasses = "font-medium transition rounded-md";
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "border border-pink-500 text-pink-500 hover:bg-pink-50",
    ghost: "text-gray-600 hover:text-pink-500 hover:bg-pink-50",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};

const categories = ["Platform", "Healthcare", "Education", "Fintech", "Cybersecurity", "Sustainability", "IoT"];

const LaunchForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    founder: '',
    founderImage: '',
    image: '',
    category: '',
    tags: [''],
    launchDate: '',
    status: 'Beta'
  });

  const [imagePreview, setImagePreview] = useState('');
  const [founderImagePreview, setFounderImagePreview] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        if (type === 'product') {
          setImagePreview(imageUrl);
          setFormData(prev => ({ ...prev, image: imageUrl }));
        } else {
          setFounderImagePreview(imageUrl);
          setFormData(prev => ({ ...prev, founderImage: imageUrl }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagChange = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData(prev => ({ ...prev, tags: newTags }));
  };

  const addTag = () => {
    if (formData.tags.length < 5) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, ''] }));
    }
  };

  const removeTag = (index) => {
    if (formData.tags.length > 1) {
      const newTags = formData.tags.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, tags: newTags }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Filter out empty tags
    const filteredTags = formData.tags.filter(tag => tag.trim() !== '');
    
    const productData = {
      ...formData,
      tags: filteredTags,
      id: Date.now(), // Simple ID generation
      likes: 0,
      views: 0,
      rating: 0,
      featured: false
    };

    onSubmit(productData);
    
    // Reset form
    setFormData({
      name: '',
      description: '',
      founder: '',
      founderImage: '',
      image: '',
      category: '',
      tags: [''],
      launchDate: '',
      status: 'Beta'
    });
    setImagePreview('');
    setFounderImagePreview('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-pink-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Launch Your Product</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">Share your innovation with the StartHerUp community</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your product name"
            />
          </div>

          {/* Product Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Describe your product and its key features"
            />
          </div>

          {/* Product Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Image *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-500 transition">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Product preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setImagePreview('');
                      setFormData(prev => ({ ...prev, image: '' }));
                    }}
                  >
                    Change Image
                  </Button>
                </div>
              ) : (
                <div>
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload your product image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'product')}
                    className="hidden"
                    id="product-image"
                    required
                  />
                  <label htmlFor="product-image">
                    <Button type="button" variant="secondary" as="span">
                      <Upload className="w-4 h-4 mr-2" />
                      Choose Image
                    </Button>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Founder Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Founder Name *
              </label>
              <input
                type="text"
                name="founder"
                value={formData.founder}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Founder Photo
              </label>
              <div className="border border-gray-300 rounded-lg p-3">
                {founderImagePreview ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={founderImagePreview}
                      alt="Founder preview"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setFounderImagePreview('');
                        setFormData(prev => ({ ...prev, founderImage: '' }));
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'founder')}
                      className="hidden"
                      id="founder-image"
                    />
                    <label htmlFor="founder-image">
                      <Button type="button" variant="ghost" size="sm" as="span">
                        <User className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Category and Launch Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Launch Date *
              </label>
              <input
                type="month"
                name="launchDate"
                value={formData.launchDate}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Beta"
                  checked={formData.status === 'Beta'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Beta
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Live"
                  checked={formData.status === 'Live'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Live
              </label>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (up to 5)
            </label>
            <div className="space-y-2">
              {formData.tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => handleTagChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder={`Tag ${index + 1}`}
                  />
                  {formData.tags.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTag(index)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              {formData.tags.length < 5 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={addTag}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Tag
                </Button>
              )}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
            >
              Launch Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LaunchForm;