// Tutorials Page JavaScript

// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const tutorialCards = document.querySelectorAll(".tutorial-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      // Filter tutorial cards
      tutorialCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Search functionality (optional)
  const searchInput = document.getElementById("tutorialSearch");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();

      tutorialCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Load more functionality
  const loadMoreBtn = document.querySelector(".load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      // Simulate loading more tutorials
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

      setTimeout(() => {
        this.innerHTML =
          '<i class="fas fa-plus-circle"></i> Load More Tutorials';
        alert("More tutorials coming soon!");
      }, 1000);
    });
  }

  // Tutorial upload form handling
  const uploadForm = document.getElementById("tutorialUploadForm");
  if (uploadForm) {
    uploadForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Uploading...';
      submitBtn.disabled = true;

      // Simulate upload (replace with actual upload logic)
      setTimeout(() => {
        alert("Tutorial uploaded successfully!");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        this.reset();

        // Hide file names
        document.querySelectorAll(".file-name").forEach((el) => el.remove());
      }, 2000);
    });
  }

  // File upload preview
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const fileName = this.files[0]?.name;
      const label = this.nextElementSibling;

      if (fileName) {
        // Remove previous file name if exists
        const existingName = label.querySelector(".file-name");
        if (existingName) existingName.remove();

        // Add new file name
        const fileNameSpan = document.createElement("span");
        fileNameSpan.className = "file-name";
        fileNameSpan.textContent = fileName;
        label.appendChild(fileNameSpan);

        label.style.borderColor = "#667eea";
        label.style.background = "rgba(102, 126, 234, 0.05)";
      }
    });
  });

  // Drag and drop for file uploads
  fileInputs.forEach((input) => {
    const label = input.nextElementSibling;

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      label.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ["dragenter", "dragover"].forEach((eventName) => {
      label.addEventListener(eventName, () => {
        label.style.borderColor = "#667eea";
        label.style.background = "rgba(102, 126, 234, 0.1)";
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      label.addEventListener(eventName, () => {
        label.style.borderColor = "#ddd";
        label.style.background = "#f8fafc";
      });
    });

    label.addEventListener("drop", function (e) {
      const files = e.dataTransfer.files;
      input.files = files;

      // Trigger change event
      const event = new Event("change", { bubbles: true });
      input.dispatchEvent(event);
    });
  });

  // Newsletter subscription
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;

      // Simulate subscription
      alert(
        `Thanks for subscribing with ${email}! You'll receive updates about new tutorials.`
      );
      this.reset();
    });
  }

  // Admin panel toggle (for demo purposes)
  // Press Ctrl+Shift+A to show/hide upload section
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === "A") {
      const uploadSection = document.getElementById("uploadSection");
      if (uploadSection) {
        uploadSection.style.display =
          uploadSection.style.display === "none" ? "block" : "none";
      }
    }
  });

  // Smooth scroll for tutorial links
  document.querySelectorAll(".tutorial-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // In a real implementation, this would open a video player modal
      alert(
        "Video player would open here. Integrate with YouTube, Vimeo, or custom video player."
      );
    });
  });

  // Add view count animation
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent =
        value >= 1000 ? (value / 1000).toFixed(1) + "K" : value;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Intersection Observer for view count animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        entry.target.classList.add("animated");
        const viewText = entry.target.textContent;
        const viewCount = parseFloat(viewText) * 1000;
        animateValue(entry.target, 0, viewCount, 1000);
      }
    });
  });

  document
    .querySelectorAll(".tutorial-meta span:last-child")
    .forEach((span) => {
      observer.observe(span);
    });
});

// Video player modal (placeholder)
function openVideoPlayer(videoUrl) {
  // This would open a modal with video player
  console.log("Opening video:", videoUrl);
  // Implementation would include:
  // - Create modal overlay
  // - Load video player (YouTube, Vimeo, or HTML5)
  // - Add close button
  // - Track video views
}
